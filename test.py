import string


def split(inp):
    return [char for char in inp]


sentence = split(input())


letter_count = {chr(i+96): i for i in range(1, 27)}
key_list = list(letter_count.keys())
val_list = list(letter_count.values())

for i in range(len(sentence)):
    count = 0
    for j in range(len(sentence)):
        if(sentence[i] == sentence[j]):
            count += 1

    if(sentence[i] in letter_count):
        x = letter_count[sentence[i]]
        x += count
        sentence[i] = key_list[val_list.index(x)]

a_string = "".join(sentence)
print(a_string)
