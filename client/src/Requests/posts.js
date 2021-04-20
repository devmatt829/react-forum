import axios from 'axios';
const sendPostNumberRequest = async () => axios.get('/api/v1/posts-number');
const sendPostsPageRequest = async (currentPage, postsPerPage) => axios.get(`/api/v1/posts?page=${currentPage}&number=${postsPerPage}`);
const sendPostsRequest = async () => axios.get('/api/v1/posts');
const sendPostSubmitRequest = async (body) => axios.post('/api/v1/posts', body);
const sendSinglePostRequest = async (id) => axios.get(`/api/v1/posts/${id}`);
const sendUpvotePostRequest = async (id) => axios.post(`/api/v1/posts/${id}/upvote`);
const sendDownvotePostRequest = async (id) => axios.post(`/api/v1/posts/${id}/downvote`);
export { sendPostNumberRequest, sendPostsPageRequest, sendPostsRequest, sendPostSubmitRequest, sendSinglePostRequest, sendUpvotePostRequest, sendDownvotePostRequest };
