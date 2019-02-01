# classical vs prototypal
#
#
# inheritance => based on what they are.
# composition => based on what they do.


# Cat => {eater, meower, sleeper}
# Dog => {eater, barker, sleeper}
# Human => {}
#
#
# function eater() {}
# function sleeper() {}
#
# willmount vs didmount => ajax
#  - AJAX => new state => no setState
#



# render() {
#   if (this.prop === null) return null;
#
#   return <div>
#           </div>
# }

#
#
# climbing_stairs [1, 2, 3], stairs => 4
# 0 : [[]]
#
# 1 : [[1]]
#
# 2 : [
#       [1,1],
#       [2]
#     ]
#
# 3 : [
#       [1,1,1],
#       [2,1],
#       [1,2],
#       [3]
#     ]
#
# 4 : [
#      [1,1,1,1],
#      [2,1,1],
#      [1,2,1],
#      [3,1],
#
#      [1,1,2],
#      [2,2],
#
#      [1,3],
#     ]
#   ...

def climbing_stairs(num)
  return [[]] if num == 0
  return [[1]] if num == 1
  steps = 2
  begin_arr = [[], [1], [2], [1, 1]]
  holder = []
  while num != steps
    begin_arr.each do |arr|
      holder = arr
      if arr + 1 == steps + 1
        arr + [1]
      else if arr + 2 == steps + 1

      else if arr + 3 == steps + 1

      end
    end
    steps += 1
  end
  return begin_arr
end


# make Cache
# const cache = {
#   0 : [[]]
#   1 : [[1]],
#   2 : [[1,1], [2]]
# };

# function cs(num) {
# check Cache
  # if (cache[n]) return cache[n];

# update Cache
#   cache[n] =
#   cs(num - 1).map(el => el.push(1)).concat(
#   cs(num - 2).map(el => el.push(2))).concat(
#   cs(num - 3).map(el => el.push(3)));
#
#   return cache[n];
# }

# pseudo-code
# create answer array
# create variable that shows length of ones
# add until amount is equal to target
# iterate through array of steps
# begin step one
# push in to answer array


# climbing_stairs(3)
# [1, 1, 1]
# [2, 1], [1, 2]
# [3]
