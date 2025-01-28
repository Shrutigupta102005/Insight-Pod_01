import React from 'react';

function CommunityPage() {
  const posts = [
    {
      title: 'AI Ethics Discussion',
      author: 'TechEthicist',
      timeAgo: '2h ago',
      content: "Thoughts on today's episode about AI ethics in healthcare?",
      comments: 24,
      likes: 156,
      avatar: 'https://source.unsplash.com/random/40x40?avatar'
    }
    // Add more posts as needed
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Community Discussions</h2>
        <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 rounded-lg">
          New Post
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="post-card glass-effect rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-4">
                <img src={post.avatar} alt="user avatar" className="rounded-full w-10 h-10" />
                <div>
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-300">Posted by @{post.author}</p>
                </div>
              </div>
              <span className="text-sm text-gray-300">{post.timeAgo}</span>
            </div>
            <p className="text-gray-300 mb-4">{post.content}</p>
            <div className="flex space-x-4 text-sm text-gray-300">
              <button className="flex items-center space-x-2">
                <span>💬</span>
                <span>{post.comments} Comments</span>
              </button>
              <button className="flex items-center space-x-2">
                <span>❤️</span>
                <span>{post.likes} Likes</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityPage;