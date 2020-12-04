1. Passport data is validated in batch files (your puzzle input). Each passport is represented as a sequence of key:value pairs separated by spaces or newlines. Passports are separated by blank lines.

  The expected fields are as follows:

  - byr (Birth Year)
  - iyr (Issue Year)
  - eyr (Expiration Year)
  - hgt (Height)
  - hcl (Hair Color)
  - ecl (Eye Color)
  - pid (Passport ID)
  - cid (Country ID)

  Surely, nobody would mind if you made the system temporarily ignore missing cid fields. Treat this "passport" as valid.

2. The line is moving more quickly now, but you overhear airport security talking about how passports with invalid data are getting through. Better add some data validation, quick!

  You can continue to ignore the cid field, but each other field has strict rules about what values are valid for automatic validation:

  - byr (Birth Year) - four digits; at least 1920 and at most 2002.
  - iyr (Issue Year) - four digits; at least 2010 and at most 2020.
  - eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
  - hgt (Height) - a number followed by either cm or in:
    - If cm, the number must be at least 150 and at most 193.
    - If in, the number must be at least 59 and at most 76.
  - hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  - ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  - pid (Passport ID) - a nine-digit number, including leading zeroes.
  - Mcid (Country ID) - ignored, missing or not.
