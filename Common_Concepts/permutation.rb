require 'byebug'

class Array
  def permutations
    # debugger
    return [self] if self.length <= 1

    last_num = [self.last]
    total_perms = []
    perms = self[0..-2].permutations
    perms.each { |el|
      (0..el.length).each { |idx|
        first_half = el[0...idx]
        second_half = el[idx..-1]
        total_perms << first_half + last_num + second_half
      }
    }
    total_perms
  end
end

p [1, 2, 3].permutations
