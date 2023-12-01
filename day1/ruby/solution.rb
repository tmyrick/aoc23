# frozen_string_literal: true

class DayOne2023
  def initialize
    @lines = File.read("../input1.txt").split("\n")
    puts part_one
    puts part_two
  end

  def part_one
    @lines.sum do |line|
      digits = line.scan(/\d/)
      first = digits.first
      last = digits.last
      "#{first}#{last}".to_i
    end
  end

  def part_two
    numbers = %w[one two three four five six seven eight nine]
    @lines.sum do |line|
      digits = line.scan(/(?=(one|two|three|four|five|six|seven|eight|nine|\d))/).flatten
      first = numbers.index(digits.first)&.next || digits.first
      last = numbers.index(digits.last)&.next || digits.last
      "#{first}#{last}".to_i
    end
  end
end

DayOne2023.new