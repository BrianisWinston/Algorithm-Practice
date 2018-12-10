def countingValleys(n, s)
    answer = 0
    inc = 0
    last = 0
    s.split('').each do |el|
        el == "D" ? inc -= 1 : inc += 1
        if inc < 0 && last >= 0
            answer += 1
        end
        last = inc
    end
    answer
end
