require 'byebug'
# TREES ---------------------------------------------------------
# flatten binary tree to linekd list
# def flatten(node)
#   current = node
#   while current != nil
#     if current.left != nil
#       new = current.left
#       while new.right != nil
#         new = new.right
#       end
#
#       new.right = current.right
#       current.right = current.left
#       current.left = nil
#     end
#     current = current.right
#   end
# end

# inorder traversal
# class TreeNode
#   attr_accessor :val, :left, :right
#
#   def initialize(val)
#     @val = val
#     @left, @right = nil, nil
#   end
# end
#
# root = TreeNode.new(10)
# nine = TreeNode.new(9)
# twelve = TreeNode.new(12)
# eight = TreeNode.new(8)
# seven = TreeNode.new(7)
# six = TreeNode.new(6)
# five = TreeNode.new(5)
# four = TreeNode.new(4)
# three = TreeNode.new(3)
# root.left = eight
# root.right = twelve
# eight.left = six
# eight.right = nine
# six.left = four
# six.right = seven
# four.right = five
# four.left = three
#
# def inorder_trav(root)
#   # debugger
#   ans = []
#   def traverse(node, ans)
#     if node != nil
#       traverse(node.left, ans)
#       ans << node.val
#       traverse(node.right, ans)
#     end
#   end
#   traverse(root, ans)
#   ans
# end

# def postorder_trav(root)
#   # debugger
#   ans = []
#   def traverse(node, ans)
#     if node != nil
#       traverse(node.left, ans)
#       traverse(node.right, ans)
#       ans << node.val
#     end
#   end
#   traverse(root, ans)
#   ans
# end
#
#
# def preorder(root)
#   queue = [root]
#   answer = []
#   while queue.length != 0
#     popped = queue.pop
#     answer << popped.val
#     queue << popped.right if popped.right != nil
#     queue << popped.left if popped.left != nil
#   end
#   answer
# end
#
# def trim_bst(root, min, max)
#   @answer = []
#   def trim(node, min, max)
#     return if node == nil
#     node.left = trim(node.left, min, max)
#     node.right = trim(node.right, min, max)
#     if node.val >= min && node.val <= max
#       @answer << node.val
#       return node
#     elsif node.val < min
#       return node.right
#     elsif node.val > max
#       return node.left
#     end
#   end
#   trim(root, min, max)
#   @answer
# end
# p inorder_trav(root)
# p preorder(root)
# p postorder_trav(root)
# p trim_bst(root, 5, 10)

# ------------------------------------------------
# def largest_sum(arr)
#   return 0 if arr.length == 0
# # debugger
#   max_sum = arr[0]
#   current_sum = arr[0]
#   arr[1..-1].each do |num|
#     current_sum = [current_sum + num, num].max
#     max_sum = [current_sum, max_sum].max
#   end
#   max_sum
# end

# def maxSubArray2(ar)
#   curr_max = max_so_far = ar[0]
#   ar[1..-1].each do |x|
#     curr_max = (x > curr_max+x) ? x : curr_max + x
#     max_so_far = curr_max if curr_max > max_so_far
#   end
#   max_so_far
# end

# def max_subarray( arr )
#   max = 0
#
#   # choose a starting point in the array
#   (0..arr.length-1).each do |start|
#     result = 0
#
#     # loop forward through array elements
#     (start..arr.length-1).each do |num|
#       result += arr[num]
#       max = result if result > max
#     end
#   end
#
#   max
# end

# arr1 = [1, -1, 10, 100, -10, 100]
# arr2 = [ 2, -3,  6,  5, -1,  2, -4,  3] # 12
# p max_subarray(arr2)
# p maxSubArray2(arr2)
# p largest_sum(arr2)

class Node
  attr_accessor :val, :next, :prev

  def initialize(val = nil)
    @val = val
    @next = nil
    @prev = nil
  end
end

class LinkedList
  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def add(val)
    new_node = Node.new(val)

    new_node.prev = @tail.prev
    new_node.next = @tail
    @tail.prev.next = new_node
    @tail.prev = new_node

    new_node
  end

  def show
    list = []
    node = @head
    while node.next != nil
      node.val == nil ? list << "head" : list << node.val
      node = node.next
      list << "tail" if node.val == nil
    end
    list
  end
end
