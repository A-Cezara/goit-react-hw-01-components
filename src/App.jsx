import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import user from './user.json';

const App = () => (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics/>
  </div>
);

export default App;