# if num == 0
#   return 0
# elsif num == 1
#   return 1
# end
#
# fib_seq(num - 1) + fib_seq(num - 2)
FIBS = {
  0 => 0,
  1 => 1
}
def fib_seq(num)
  return FIBS[num] if num <= 1
  if FIBS[num] != nil
    return FIBS[num]
  else
    FIBS[num] = fib_seq(num - 1) + fib_seq(num - 2)
    return FIBS[num]
  end
end

p fib_seq(7)
p FIBS
p fib_seq(0)
p fib_seq(1)
@cache = [0,1]

def fib(n)
  p self
  return @cache[n] if @cache[n]
  @cache[n] = fib(n-1) + fib(n-2)
end
p "outside of function #{self}"
p fib(10)
