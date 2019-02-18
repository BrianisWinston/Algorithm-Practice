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
        total_perms << second_half + last_num + first_half
      end
    end

    total_perms
  end
end

p [1, 2, 3].permutations
