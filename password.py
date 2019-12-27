#!/usr/bin/env python
from random import seed
from random import randint


password = ""

for x in range(4):
    for _ in range(10):
        value = randint(0, 10)
        password.append(value)

print(password)
