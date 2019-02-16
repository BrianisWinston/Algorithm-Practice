class Array
  def permutations
    return [self] if self.length == 1

    perms = self[1..-1].permutations
    first_num = [self.first]
    total_perms = []
    perms.each do |perm|
      (0..perm.length).each do |idx|
        first_half = perm[0...idx]
        second_half = perm[idx..-1]
        total_perms << first_half + first_num + second_half
      end
    end
    total_perms
  end
end

p [1, 2, 3].permutations
