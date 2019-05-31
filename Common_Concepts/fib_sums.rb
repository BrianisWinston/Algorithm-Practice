# def fib(num)
#   return 0 if num == 0
#   return 1 if num == 1
#
#   fib(num - 1) + fib(num - 2)
# end

# def fib(num)
#   base = [0, 1]
#   return base[num] if num <= 1
#
#   count = 1
#   while count < num
#     base << base[-1] + base[-2]
#     count += 1
#   end
#   base.last
# end

SOLUTIONS = {
  0 => 0,
  1 => 1
}

def fib(num)
  if SOLUTIONS[num] != nil
    SOLUTIONS[num]
  else
    SOLUTIONS[num] = fib(num - 1) + fib(num - 2)
  end
end

# FIBS = {
#   0 => 0,
#   1 => 1
# }
# def fib_seq(num)
#   return FIBS[num] if num <= 1
#   if FIBS[num] != nil
#     return FIBS[num]
#   else
#     FIBS[num] = fib_seq(num - 1) + fib_seq(num - 2)
#     return FIBS[num]
#   end
# end
#
# p fib_seq(7)
# p FIBS
# p fib_seq(0)
# p fib_seq(1)
# @cache = [0,1]
#
# def fib(n)
#   p self
#   return @cache[n] if @cache[n]
#   @cache[n] = fib(n-1) + fib(n-2)
# end
# p "outside of function #{self}"

p fib(0) == 0
p fib(1) == 1
p fib(2) == 1
p fib(3) == 2
p fib(4) == 3
p fib(5) == 5
p fib(6) == 8
p fib(7) == 13
p fib(8) == 21
p fib(9) == 34
p fib(10) == 55
p fib(45)
