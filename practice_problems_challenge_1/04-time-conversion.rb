# Write a method that will take in a number of minutes, and returns a
# string that formats the number into `hours:minutes`.
#
# Difficulty: easy.

def time_conversion(minutes)
  # hour = 0
  # min = minutes
  # until min < 60
  #   if min >= 60
  #     hour += 1
  #     min -= 60
  #   end
  # end
  # min = "0#{min}" if min.to_s.length == 1
  # p "#{hour}:#{min}"
end


# These are tests to check that your code is working. After writing
# your solution, they should all print true.

puts('time_conversion(15) == "0:15": ' + (time_conversion(15) == '0:15').to_s)
puts('time_conversion(150) == "2:30": ' + (time_conversion(150) == '2:30').to_s)
puts('time_conversion(360) == "6:00": ' + (time_conversion(360) == '6:00').to_s)
