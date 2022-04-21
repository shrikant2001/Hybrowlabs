from collections import defaultdict
D = defaultdict(int)

string = input()

for s in string:
    if D[s]:    #if the key exits
        D[s] += 1
    else:       #creatinng key on its first occurence
        D[s] = 1

for key,val in D.items():
    print(key,"-",val)

#1- Time complexity for this code is O(n)

#2- Space complexity is O(1) as at maximum 128 
#   unique ASCII characters can be there in a string