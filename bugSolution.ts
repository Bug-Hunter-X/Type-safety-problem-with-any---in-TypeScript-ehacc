function printArrayGeneric<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];
printArrayGeneric(myArray); // This works fine

const myStringArray: string[] = ['a', 'b', 'c'];
printArrayGeneric(myStringArray); // This also works fine

const myMixedArray: (number | string)[] = [1, 'a', 2, 'b'];
printArrayGeneric(myMixedArray); // This works fine too

// const myAnyArray: any[] = [1, 'a', true, {name: 'John'}];
// printArrayGeneric(myAnyArray); // This will give a compiler error

//To use any type, you can still use this:
printArrayGeneric<any>([1, 'a', true, {name: 'John'}]);