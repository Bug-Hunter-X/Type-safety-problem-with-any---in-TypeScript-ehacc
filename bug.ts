function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray); // This works fine

const myStringArray: string[] = ['a', 'b', 'c'];
printArray(myStringArray); // This also works fine

const myMixedArray: (number | string)[] = [1, 'a', 2, 'b'];
printArray(myMixedArray); // This works fine too

const myAnyArray: any[] = [1, 'a', true, {name: 'John'}];
printArray(myAnyArray); // This works fine too, but it has a type safety problem