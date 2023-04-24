from pathlib import Path, PureWindowsPath
from pprint import pprint

p = Path('tests') / 'python' / 'pathlib.py'

pprint(p.is_relative_to('tests'))
