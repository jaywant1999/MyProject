const isLikeByReqUsers = (reqUserId, post) => {
  if (!post || !Array.isArray(post.liked)) return false;

  return post.liked.some((user) => user.id === reqUserId);
};

export default isLikeByReqUsers;
