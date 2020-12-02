"""
Each line gives the password policy and then the password.
The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid.
For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.
"""

challenge_input = open("input", "r")
valid_count = 0

for line in challenge_input:
    #split by delim to get policy
    policy = line.split(':')[0]
    password = line.split(':')[1]
    #split policy by space
    count = policy.split(' ')[0]
    letter = policy.split(' ')[1]
    #split count by '-'
    l_limit = int(count.split('-')[0])
    u_limit = int(count.split('-')[1]) + 1 #Upper limit must be inclusive, so add 1
    #Now check string
    occurence = password.count(letter)
    #is between limits?
    is_between = occurence in range(l_limit, u_limit)
    if is_between :
        print(f"Password {password} is valid with policy {policy}")
        valid_count += 1
    else:
        print(f"Password {password} is NOT valid with policy {policy}")

print(f"There are {valid_count} valid policies")
