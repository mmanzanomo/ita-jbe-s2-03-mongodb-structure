// Get all videos
db.videos.find();

// Get all users with any subscription
db.subscription.aggregate([
  {
    $lookup:
      {
        from: 'users',
        localField: 'user',
        foreignField: '_id',
        as: 'user_details'
      }
  },
  {
    $group:
      {
        _id: "$user_details.username"
      }
  },{
    $project:
      {
        _id: 0,
        "user_details.username": "$_id",
      }
  }
]);

