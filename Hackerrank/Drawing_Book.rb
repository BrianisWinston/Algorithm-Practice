def pageCount(n, p)
    if ( n.to_f / 2 >= p )
        answer = p.to_f / 2
    else
        new_num = n - p
        answer = (new_num.to_f / 2)
        answer += 1 if ( n % 2 == 0 && p % 2 != 0 )
    end
    answer.floor
end
