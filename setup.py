import setuptools
with open("README.md", "r") as fh:
    long_description = fh.read()
setuptools.setup(
     name='lor-decklist-printer',  
     version='0.1',
     scripts=['lor-decklist-printer'] ,
     long_description=long_description,
     long_description_content_type="text/markdown",
     url="https://github.com/PotatoIRL",
     packages=setuptools.find_packages()
)
