def pageCount(n, p)
    if ( n / 2 >= p )
        answer = p / 2
    elsif ()
        new_num = n - p
        answer = (new_num / 2)
        answer += 1 if ( n % 2 == 0 && p % 2 != 0 )
    end
    answer
end
