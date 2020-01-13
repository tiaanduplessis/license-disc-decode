import discDecode from './'

test('should decode barcode string', () => {
  const result = discDecode('%MVL1CC08%0168%1001A6GK%1%1001055W4R60%CA419547%HXV436S%Sedan (closed top) / Sedan (toe-kap)%MERCEDES-BENZ%W203%Grey / Grys%WDC2030422R249727%27194030818686%2015-02-28%')
  expect(result.vin).toBeDefined()
  expect(result.color).toBe('Grey / Grys')
})
