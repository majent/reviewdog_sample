/* eslint-disable @typescript-eslint/no-unused-vars */

// Argument count (argument-count)
function calculateTotal(
  price: number,
  taxRate: number,
  discount: number,
  shipping: number,
  handlingFee: number
): number {
  return price + price * taxRate - discount + shipping + handlingFee;
}

// 2. Complex logic (complex-logic)
function isEligible(
  a: boolean,
  b: boolean,
  c: boolean,
  d: boolean,
  e: boolean,
  f: boolean
): boolean {
  // 複雑な条件: ((a AND b) OR (c AND NOT d AND (e OR f)))
  if ((a && b) || (c && !d && (e || f))) {
    return true;
  }
  return false;
}

// 3. File length (file-lines)

// 4. Identical blocks of code (identical-code)
function processData1(value: number): number {
  if (value > 10) {
    return value * 2;
  } else if (value > 5) {
    return value + 7;
  } else {
    return value - 3;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function processData2(value: number): number {
  // processData1 と完全に同一の処理ブロック
  if (value > 10) {
    return value * 2;
  } else if (value > 5) {
    return value + 7;
  } else {
    return value - 3;
  }
}

// 5. Method complexity (method-complexity)
function complexDecision(a: number, b: number, c: number): string {
  if (a > 10) {
    if (b < 5) {
      if (c === 0) {
        return "X";
      } else if (c === 1) {
        return "Y";
      } else if (c > 10 && b + c < a) {
        return "Z";
      }
    } else if (b > 20 && a < 30) {
      return "W";
    }
  } else if (a < 0 && b > 0) {
    return "V";
  }
  return "U";
}

// 6. Method count (method-count)
class ManyMethods {
  method1() {}
  method2() {}
  method3() {}
  method4() {}
  method5() {}
  method6() {}
  method7() {}
  method8() {}
  method9() {}
  method10() {}
  // このように多数のメソッドをもつクラス
}

// 7. Method length (method-lines)
function veryLongFunction() {
  // 多数の行を用意（実際には100行以上など）
  let x = 0;
  // ...
  // (中略: 大量の処理がある想定)
  for (let i = 0; i < 100; i++) {
    x += i;
  }
  // ...
  // 多数の不要なコメントや冗長な処理
  return x;
}

// 8. Nested control flow (nested-control-flow)
function nestedIfs(a: number, b: number): string {
  if (a > 0) {
    if (b > 0) {
      if (a > b) {
        if (b > 10) {
          if (a < 100) {
            return "Nested!";
          }
        }
      }
    }
  }
  return "Done";
}

// 9. Return statements (return-statements)
function tooManyReturns(x: number): number {
  if (x === 0) return 0;
  if (x === 1) return 10;
  if (x === 2) return 20;
  if (x === 3) return 30;
  if (x > 10) return x * 2;
  return -1;
}

// 10. Similar blocks of code (similar-code)
function similarBlockA(value: number): number {
  if (value > 10) {
    return value * 2;
  } else if (value > 5) {
    return value + 7;
  } else {
    return value - 3;
  }
}

function similarBlockB(num: number): number {
  // 上記と処理フローが似ているが、変数名などが微妙に異なる
  if (num > 10) {
    return num * 2;
  } else if (num > 5) {
    return num + 7;
  } else {
    return num - 3;
  }
}
