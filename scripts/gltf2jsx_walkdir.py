# https://github.com/pmndrs/gltfjsx
import subprocess as sp
import shutil
from pathlib import Path
from pprint import pprint
import re

####! CHANGE THIS !#################################
GLTF_DIR = Path("public/3d_models")
TSX_DIR = Path("src/components/3d_models/")
#!##################################################


def run(script):
    return str(sp.run(script, shell=True, capture_output=True).stdout, "UTF-8").split("\n")[0]


def main():
    res = run("ls | grep next.config.js")
    if res != "next.config.js":
        print("please run this script from the root of the project")
        return 1

    for file in GLTF_DIR.iterdir():
        if file.suffix == ".gltf":
            file_tsx = file.stem[0].upper() + file.stem[1:] + ".tsx"
            cmd_npx = f"npx gltfjsx -tT {file}"
            print(cmd_npx)
            sp.run(cmd_npx, shell=True)
            from_dir_tsx = Path.cwd() / file_tsx
            from_dir_glb = Path.cwd() / (file.stem + "-transformed.glb")
            to_dir_tsx = Path.cwd() / TSX_DIR / file_tsx
            to_dir_glb = Path.cwd() / GLTF_DIR / \
                (file.stem + "-transformed.glb")
            shutil.move(from_dir_tsx, to_dir_tsx)
            shutil.move(from_dir_glb, to_dir_glb)
            fix_typescript(
                to_dir_tsx, f"/{GLTF_DIR.parts[1]}/{file.stem + '-transformed.glb'}")

    return 0


# 生成されたコードでエラーとなる箇所を修正する。
# gltfjsx version 6.1.1
def fix_typescript(file_path, glb_path):
    with open(file_path) as f:
        script = f.readlines()
        result = []
        for line in script:
            res = re.sub(r"import \{ GLTF \} from 'three-stdlib'",
                         "import type { GLTF } from 'three-stdlib'", line)
            res = re.sub(r"(const \{ nodes, materials \}) = useGLTF\('(.+)'\) as GLTFResult",
                         f"\\1 = useGLTF('{glb_path}') as unknown as GLTFResult", res)
            res = re.sub(r"useGLTF.preload\('.+'\)",
                         f"useGLTF.preload('{glb_path}')", res)
            result.append(res)
    new_script = ''.join(result)
    with open(file_path, mode='w') as f:
        f.write(new_script)


if __name__ == '__main__':
    main()
