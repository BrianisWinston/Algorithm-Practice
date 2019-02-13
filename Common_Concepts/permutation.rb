require 'byebug'

class Array
  def permutations
    return [self] if self.length <= 1

    perms = self[1..-1].permutations
    first = [self.first]
    total_perms = []
    perms.each do |arr|
      (0..arr.length).each do |id|
        first_half = arr[0...id]
        second_half = arr[id..-1]
        total_perms << first_half + first + second_half
      end
    end
    total_perms
  end
end

p [1, 2, 3].permutations
