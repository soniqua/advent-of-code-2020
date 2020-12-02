"""
Each policy actually describes two positions in the password, where:
 - 1 means the first character,
 - 2 means the second character,
and so on.
(Be careful; Toboggan Corporate Policies have no concept of "index zero"!)
Exactly one of these positions must contain the given letter.
Other occurrences of the letter are irrelevant for the purposes of policy enforcement.
"""

challenge_input = open("input", "r")
valid_count = 0

for line in challenge_input:
    #split by delim to get policy
    policy = line.split(':')[0]
    password = str.rstrip(line.split(':')[1]).strip() #LEADING SPACE
    print(f"Checking '{password}'")
    #split policy by space
    count = policy.split(' ')[0]
    letter = policy.split(' ')[1]
    is_ok= 0
    #Now check string per position
    for position in count.split('-'):
        pos = int(position) #Cast to int
        character = password[pos-1:pos] #For first char, must re-index at zero, etc.
        if character == letter :
            #This might be ok - record
            is_ok += 1
    #if exactly one, ok
    if is_ok == 1 :
        print(f"Password {password} is valid with policy {policy} : {is_ok}")
        valid_count += 1
    else:
        print(f"Password {password} is NOT valid with policy {policy} : {is_ok}")

print(f"There are {valid_count} valid policies")
