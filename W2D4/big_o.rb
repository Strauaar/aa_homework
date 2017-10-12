FISH = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
        'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
TILES_ARRAY = ["up", "right-up", "right", "right-down",
               "down", "left-down", "left",  "left-up" ]

def sluggish_octopus(array)
  max = 0
  array.each do |fish1|
    array.each do |fish2|
      if fish1.size >= fish2.size
        max = fish1
      else
        max = fish2
      end
    end
  end
  max
end

def dominant_octopus(array)
  dominant_octopus_helper(array).last
end

def dominant_octopus_helper(array)
  return array if array.size == 1
  mid = array.size/2

  left = array.take(mid)
  right = array.drop(mid)

  merged_left = dominant_octopus_helper(left)
  merged_right = dominant_octopus_helper(right)

  merge(merged_left, merged_right)
end

def merge(left, right)
  merged = []

  until left.empty? || right.empty?
    if left[0].length < right[0].length
      merged << left.shift
    else
      merged << right.shift
    end
  end
  merged + left + right
end

def clever_octopus(array)
  max = ""
  array.each do |fish|
    if fish.length >= max.length
      max = fish
    end
  end
  max
end

def slow_dance(direction, tiles_array)
  tiles_array.each_with_index do |tile, i|
    if tile == direction
      return i
    end
  end
end

def fast_dance(direction, new_tiles_data_structure)
  

end

p sluggish_octopus(FISH)

p dominant_octopus(FISH)

p clever_octopus(FISH)

p slow_dance("right-down", TILES_ARRAY)
