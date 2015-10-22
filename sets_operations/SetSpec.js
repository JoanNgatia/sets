describe("set functions", function() {
  it("union of two sets" , function() {
    var x = new Set([10, 20]);
    expect(x.union([20, 30])).toEqual([10, 20, 30]);
    expect(x.union([40, 60, 30])).toEqual([10, 20, 40, 60, 30]);
  });
  
  it("intersect two sets", function() {
    var x = new Set([6, 5, 8]);
    //expect(x.intersection([2, 3])).toEqual([2]);
    expect(x.intersection([5, 9, 3])).toEqual([5]);
  });

  it("complement two sets", function() {
    var x = new Set([1, 2, 3, 4]);
    expect(x.complement([1, 3])).toEqual([2, 4]);
    expect(x.complement([6, 5])).toEqual(null);
  });
  
  it("checks for subset", function() {
    var x = new Set([4, 8, 10, 12]);
    expect(x.subset([4, 8, 10, 20, 35, 12])).toBe(true);
    expect(x.subset([30, 40])).toBe(false);
  });
});