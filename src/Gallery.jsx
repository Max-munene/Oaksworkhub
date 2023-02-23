import React, { Component } from "react";
import { PhotoAlbum } from "react-photo-album";
import Mynav from "./Components/Navbar";

const photos = [
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/271175049_453619889604619_543033402825567642_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=D92GZjhdHOMAX_eH-Th&_nc_ht=scontent-mba1-1.xx&oh=00_AfAwjFcVfNjB2cFqiydUdnwtyA_hFnQUW0g5d5O7X9DKdg&oe=63F9AB31",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/315557322_659944752305464_6704105033630676386_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SCmFgBNWH2YAX_I6oRW&_nc_ht=scontent-mba1-1.xx&oh=00_AfCT9Ol4tksbz5NprCsMZdZfR9lP4OafLUDYDqMfEiEO2Q&oe=63F9CCCC",
    width: 700,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/315528400_659939248972681_896431029903724450_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2NO0O3hHyC8AX-yAigs&_nc_ht=scontent-mba1-1.xx&oh=00_AfCtCtUpVg5CKZxIUtWQEnYRn3cUupSj4Rfc8YLxuh6ghQ&oe=63FA448E",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/313912020_659157929050813_5438347207283331283_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AdKdGUqp18EAX8Nv77G&tn=nuR7vZw0uQMKISIS&_nc_ht=scontent-mba1-1.xx&oh=00_AfCREzFoPeqUcl7sVBVVqtZyRn5wZx2gZ_ESpyp44SCoBw&oe=63F9F52E",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/314708436_655122099454396_2247353822877302284_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RQhmBlTyiUYAX8zo2ii&tn=nuR7vZw0uQMKISIS&_nc_ht=scontent-mba1-1.xx&oh=00_AfBpRuJ9N41Vw90XKGmwgGq8zn4aY_Krc3kuaqBo_BAbSA&oe=63FA4B08",
    width: 800,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/314780266_655119789454627_4219368158830910871_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y76HbcCypVAAX8IBaDN&_nc_ht=scontent-mba1-1.xx&oh=00_AfD1_9UuUT5Vf4OCyt7ZPyJD8XI_se0dSKCpQvnDNWMXBw&oe=63F8E9F7",
    width: 700,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/306672362_624880032478603_2853023909310298276_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N3GT745Ssk0AX8Twpnt&_nc_ht=scontent-mba1-1.xx&oh=00_AfCBVW27BgTOY7PJiyX4C25nqjDgKVBz7ljHN1iE5my5og&oe=63F95565",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/271175049_453619889604619_543033402825567642_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=D92GZjhdHOMAX_eH-Th&_nc_ht=scontent-mba1-1.xx&oh=00_AfAwjFcVfNjB2cFqiydUdnwtyA_hFnQUW0g5d5O7X9DKdg&oe=63F9AB31",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/315557322_659944752305464_6704105033630676386_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SCmFgBNWH2YAX_I6oRW&_nc_ht=scontent-mba1-1.xx&oh=00_AfCT9Ol4tksbz5NprCsMZdZfR9lP4OafLUDYDqMfEiEO2Q&oe=63F9CCCC",
    width: 700,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/315528400_659939248972681_896431029903724450_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2NO0O3hHyC8AX-yAigs&_nc_ht=scontent-mba1-1.xx&oh=00_AfCtCtUpVg5CKZxIUtWQEnYRn3cUupSj4Rfc8YLxuh6ghQ&oe=63FA448E",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/313912020_659157929050813_5438347207283331283_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AdKdGUqp18EAX8Nv77G&tn=nuR7vZw0uQMKISIS&_nc_ht=scontent-mba1-1.xx&oh=00_AfCREzFoPeqUcl7sVBVVqtZyRn5wZx2gZ_ESpyp44SCoBw&oe=63F9F52E",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/314708436_655122099454396_2247353822877302284_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RQhmBlTyiUYAX8zo2ii&tn=nuR7vZw0uQMKISIS&_nc_ht=scontent-mba1-1.xx&oh=00_AfBpRuJ9N41Vw90XKGmwgGq8zn4aY_Krc3kuaqBo_BAbSA&oe=63FA4B08",
    width: 800,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/314780266_655119789454627_4219368158830910871_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y76HbcCypVAAX8IBaDN&_nc_ht=scontent-mba1-1.xx&oh=00_AfD1_9UuUT5Vf4OCyt7ZPyJD8XI_se0dSKCpQvnDNWMXBw&oe=63F8E9F7",
    width: 700,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/306672362_624880032478603_2853023909310298276_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N3GT745Ssk0AX8Twpnt&_nc_ht=scontent-mba1-1.xx&oh=00_AfCBVW27BgTOY7PJiyX4C25nqjDgKVBz7ljHN1iE5my5og&oe=63F95565",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/271175049_453619889604619_543033402825567642_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=D92GZjhdHOMAX_eH-Th&_nc_ht=scontent-mba1-1.xx&oh=00_AfAwjFcVfNjB2cFqiydUdnwtyA_hFnQUW0g5d5O7X9DKdg&oe=63F9AB31",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/315557322_659944752305464_6704105033630676386_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SCmFgBNWH2YAX_I6oRW&_nc_ht=scontent-mba1-1.xx&oh=00_AfCT9Ol4tksbz5NprCsMZdZfR9lP4OafLUDYDqMfEiEO2Q&oe=63F9CCCC",
    width: 700,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/315528400_659939248972681_896431029903724450_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2NO0O3hHyC8AX-yAigs&_nc_ht=scontent-mba1-1.xx&oh=00_AfCtCtUpVg5CKZxIUtWQEnYRn3cUupSj4Rfc8YLxuh6ghQ&oe=63FA448E",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/313912020_659157929050813_5438347207283331283_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AdKdGUqp18EAX8Nv77G&tn=nuR7vZw0uQMKISIS&_nc_ht=scontent-mba1-1.xx&oh=00_AfCREzFoPeqUcl7sVBVVqtZyRn5wZx2gZ_ESpyp44SCoBw&oe=63F9F52E",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/314708436_655122099454396_2247353822877302284_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RQhmBlTyiUYAX8zo2ii&tn=nuR7vZw0uQMKISIS&_nc_ht=scontent-mba1-1.xx&oh=00_AfBpRuJ9N41Vw90XKGmwgGq8zn4aY_Krc3kuaqBo_BAbSA&oe=63FA4B08",
    width: 800,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/314780266_655119789454627_4219368158830910871_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y76HbcCypVAAX8IBaDN&_nc_ht=scontent-mba1-1.xx&oh=00_AfD1_9UuUT5Vf4OCyt7ZPyJD8XI_se0dSKCpQvnDNWMXBw&oe=63F8E9F7",
    width: 700,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/306672362_624880032478603_2853023909310298276_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N3GT745Ssk0AX8Twpnt&_nc_ht=scontent-mba1-1.xx&oh=00_AfCBVW27BgTOY7PJiyX4C25nqjDgKVBz7ljHN1iE5my5og&oe=63F95565",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/271175049_453619889604619_543033402825567642_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=D92GZjhdHOMAX_eH-Th&_nc_ht=scontent-mba1-1.xx&oh=00_AfAwjFcVfNjB2cFqiydUdnwtyA_hFnQUW0g5d5O7X9DKdg&oe=63F9AB31",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/315557322_659944752305464_6704105033630676386_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SCmFgBNWH2YAX_I6oRW&_nc_ht=scontent-mba1-1.xx&oh=00_AfCT9Ol4tksbz5NprCsMZdZfR9lP4OafLUDYDqMfEiEO2Q&oe=63F9CCCC",
    width: 700,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/315528400_659939248972681_896431029903724450_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2NO0O3hHyC8AX-yAigs&_nc_ht=scontent-mba1-1.xx&oh=00_AfCtCtUpVg5CKZxIUtWQEnYRn3cUupSj4Rfc8YLxuh6ghQ&oe=63FA448E",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/313912020_659157929050813_5438347207283331283_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AdKdGUqp18EAX8Nv77G&tn=nuR7vZw0uQMKISIS&_nc_ht=scontent-mba1-1.xx&oh=00_AfCREzFoPeqUcl7sVBVVqtZyRn5wZx2gZ_ESpyp44SCoBw&oe=63F9F52E",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/314708436_655122099454396_2247353822877302284_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RQhmBlTyiUYAX8zo2ii&tn=nuR7vZw0uQMKISIS&_nc_ht=scontent-mba1-1.xx&oh=00_AfBpRuJ9N41Vw90XKGmwgGq8zn4aY_Krc3kuaqBo_BAbSA&oe=63FA4B08",
    width: 800,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/314780266_655119789454627_4219368158830910871_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y76HbcCypVAAX8IBaDN&_nc_ht=scontent-mba1-1.xx&oh=00_AfD1_9UuUT5Vf4OCyt7ZPyJD8XI_se0dSKCpQvnDNWMXBw&oe=63F8E9F7",
    width: 700,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/306672362_624880032478603_2853023909310298276_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N3GT745Ssk0AX8Twpnt&_nc_ht=scontent-mba1-1.xx&oh=00_AfCBVW27BgTOY7PJiyX4C25nqjDgKVBz7ljHN1iE5my5og&oe=63F95565",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/271175049_453619889604619_543033402825567642_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=D92GZjhdHOMAX_eH-Th&_nc_ht=scontent-mba1-1.xx&oh=00_AfAwjFcVfNjB2cFqiydUdnwtyA_hFnQUW0g5d5O7X9DKdg&oe=63F9AB31",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/315557322_659944752305464_6704105033630676386_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SCmFgBNWH2YAX_I6oRW&_nc_ht=scontent-mba1-1.xx&oh=00_AfCT9Ol4tksbz5NprCsMZdZfR9lP4OafLUDYDqMfEiEO2Q&oe=63F9CCCC",
    width: 700,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/315528400_659939248972681_896431029903724450_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2NO0O3hHyC8AX-yAigs&_nc_ht=scontent-mba1-1.xx&oh=00_AfCtCtUpVg5CKZxIUtWQEnYRn3cUupSj4Rfc8YLxuh6ghQ&oe=63FA448E",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/313912020_659157929050813_5438347207283331283_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AdKdGUqp18EAX8Nv77G&tn=nuR7vZw0uQMKISIS&_nc_ht=scontent-mba1-1.xx&oh=00_AfCREzFoPeqUcl7sVBVVqtZyRn5wZx2gZ_ESpyp44SCoBw&oe=63F9F52E",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/314708436_655122099454396_2247353822877302284_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RQhmBlTyiUYAX8zo2ii&tn=nuR7vZw0uQMKISIS&_nc_ht=scontent-mba1-1.xx&oh=00_AfBpRuJ9N41Vw90XKGmwgGq8zn4aY_Krc3kuaqBo_BAbSA&oe=63FA4B08",
    width: 800,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/314780266_655119789454627_4219368158830910871_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y76HbcCypVAAX8IBaDN&_nc_ht=scontent-mba1-1.xx&oh=00_AfD1_9UuUT5Vf4OCyt7ZPyJD8XI_se0dSKCpQvnDNWMXBw&oe=63F8E9F7",
    width: 700,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/306672362_624880032478603_2853023909310298276_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N3GT745Ssk0AX8Twpnt&_nc_ht=scontent-mba1-1.xx&oh=00_AfCBVW27BgTOY7PJiyX4C25nqjDgKVBz7ljHN1iE5my5og&oe=63F95565",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/271175049_453619889604619_543033402825567642_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=D92GZjhdHOMAX_eH-Th&_nc_ht=scontent-mba1-1.xx&oh=00_AfAwjFcVfNjB2cFqiydUdnwtyA_hFnQUW0g5d5O7X9DKdg&oe=63F9AB31",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/315557322_659944752305464_6704105033630676386_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SCmFgBNWH2YAX_I6oRW&_nc_ht=scontent-mba1-1.xx&oh=00_AfCT9Ol4tksbz5NprCsMZdZfR9lP4OafLUDYDqMfEiEO2Q&oe=63F9CCCC",
    width: 700,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/315528400_659939248972681_896431029903724450_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2NO0O3hHyC8AX-yAigs&_nc_ht=scontent-mba1-1.xx&oh=00_AfCtCtUpVg5CKZxIUtWQEnYRn3cUupSj4Rfc8YLxuh6ghQ&oe=63FA448E",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/313912020_659157929050813_5438347207283331283_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AdKdGUqp18EAX8Nv77G&tn=nuR7vZw0uQMKISIS&_nc_ht=scontent-mba1-1.xx&oh=00_AfCREzFoPeqUcl7sVBVVqtZyRn5wZx2gZ_ESpyp44SCoBw&oe=63F9F52E",
    width: 700,
    height: 700,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/314708436_655122099454396_2247353822877302284_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=RQhmBlTyiUYAX8zo2ii&tn=nuR7vZw0uQMKISIS&_nc_ht=scontent-mba1-1.xx&oh=00_AfBpRuJ9N41Vw90XKGmwgGq8zn4aY_Krc3kuaqBo_BAbSA&oe=63FA4B08",
    width: 800,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/314780266_655119789454627_4219368158830910871_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=y76HbcCypVAAX8IBaDN&_nc_ht=scontent-mba1-1.xx&oh=00_AfD1_9UuUT5Vf4OCyt7ZPyJD8XI_se0dSKCpQvnDNWMXBw&oe=63F8E9F7",
    width: 700,
    height: 450,
  },
  {
    src: "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/306672362_624880032478603_2853023909310298276_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=N3GT745Ssk0AX8Twpnt&_nc_ht=scontent-mba1-1.xx&oh=00_AfCBVW27BgTOY7PJiyX4C25nqjDgKVBz7ljHN1iE5my5og&oe=63F95565",
    width: 700,
    height: 700,
  },
];
const Gallery = () => {
  return (
    <div>
      <Mynav />
      <h2>Gallery</h2>
      <PhotoAlbum layout="columns" photos={photos} />;
    </div>
  );
};
export default Gallery;
