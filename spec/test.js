describe('check Input', function() {

  var collection_a = [1,2,3];
  var collection_b = [1,1,3];
  var collection_c = [1,22,3];
  var collection_d = [1,22,'d'];

  it('检测正确的输入数组', function() {
    var result = checkInput(collection_a);
    expect(result).toEqual(true);
  });

  it('检测出重复元素', function() {
    var result = checkSameNumber(collection_b);
    expect(result).toEqual(false);
  });
  it('检测出非个位数元素', function() {
    var result = checkIllegalNumber(collection_c);
    expect(result).toEqual(false);
  });
  it('检测出非数字元素', function() {
    var result = checkIllegalNumber(collection_d);
    expect(result).toEqual(false);
  });
});

describe('check role 5', function() {

  var input1 = 5;
  var testNumber_a = 35;
  var testNumber_b = 10;
  it('检测是否满足第五条规则', function() {
    var result = isRoleFive(testNumber_a,input1);
    expect(result).toEqual(true);
  });

  it('检测是否满足第五条规则', function() {
    var result = isRoleFive(testNumber_b,input1);
    expect(result).toEqual(false);
  });
});

describe('check is divisible', function() {
  var divisor = 7;
  var dividend_a = 35;
  var dividend_b = 10;
  it('检测是否可以整除', function() {
    var result = isDivisible(dividend_a,divisor)
    expect(result).toEqual(true);
  });

  it('检测是否可以整除', function() {
    var result = isDivisible(dividend_b,divisor)
    expect(result).toEqual(false);
  });
});
