import requests

html = request.get("https://en.wikipedia.org/wiki/Monty_Python".text)

from bs4 import BeautifulSoup

html_parsel = BeautifulSoup(html, features="lxml")

print(html_parsel)