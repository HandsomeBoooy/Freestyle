import hellopython
def testFunc():
	name = "LiuXing"
	gender = 'male'
	arr = [1, 2, 3, 4]
	dic = {'x': 1, 'y': 2, 'z': 3}
	arr.pop()
	print(name, gender, arr, dic)
testFunc()
filename = "test.txt"
with open("C:/Users/Administrator/Desktop/" + filename) as testFile:
	print(testFile.read())
