def bonAppetit(bill, k, b)
    bill.delete_at(k)
    if b - (bill.reduce(&:+) / 2) != 0
        print b - (bill.reduce(&:+) / 2)
    else
        print "Bon Appetit"
    end

end
