def migratoryBirds(arr)
    answer = Hash.new(0)
    arr.each { |el| answer[el] += 1}
    new = answer.sort_by { |k, v| v }
    newnew = new.select { |k, v| v == new[-1][1]}
    newnew[0][0]
end
