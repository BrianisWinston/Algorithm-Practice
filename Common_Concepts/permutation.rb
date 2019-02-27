require 'byebug'

class Array
    def permutations
      return [self] if self.length == 1

      perms = self[0..-2].permutations
      last_num = [self.last]
      total_perms = []

      perms.each do |perm|
        (0..perm.length).each do |id|
          first_half = perm[0...id]
          second_half = perm[id..-1]
          total_perms << first_half + last_num + second_half
        end
      end
      total_perms
    end
end

class String
  def permutations
    # debugger
    return [self] if length == 1
    letters = self.chars

    perms = letters[0..-2].permutations
    last_char = [letters.last]
    total_perms = []

    perms.each do |perm|
      (0..perm.length).each do |id|
        first_half = perm[0...id]
        second_half = perm[id..-1]
        total_perms << first_half + last_char + second_half
      end
    end

    total_perms
  end
end

# p [1, 2, 3, 4].permutations
p "help".permutations
