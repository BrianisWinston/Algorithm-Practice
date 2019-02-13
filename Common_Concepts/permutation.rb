require 'byebug'

class Array
  def permutations
    return [self] if self.length <= 1

    perms = self[0..-2].permutations
    last = [self.last]
    total_perms = []
    perms.each do |el|
      (0..el.length).each do |idx|
        first_half = el[0...idx]
        second_half = el[idx..-1]
        total_perms << first_half + last + second_half
      end
    end
    total_perms
  end
end

p [1, 2, 3].permutations
