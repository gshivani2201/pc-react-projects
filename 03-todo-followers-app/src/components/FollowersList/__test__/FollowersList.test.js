import { render, screen, waitFor } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';
// import axiosMock from 'axios';
import axios from 'axios';


//1. THIS ONE WOKS W/O __esModule
jest.mock('axios', () => ({
    // __esModule: true,
    get: () => ({
        data: {
            results: [
              {
                name: {
                  first: "Donald",
                  last: "Duck"
                },
                picture: {
                  large: "https://randomuser.me/api/portraits/men/39.jpg"
                },
                login: {
                  username: "AngelPriya"
                }
              }
            ]
        }
    })
}));

const MockFollowersList = () => {
  return (
      <BrowserRouter>
        <FollowersList />
      </BrowserRouter>
    )
}


//2. DOES NOT WORK
// jest.mock('axios', () => ({
//   // __esModule: true,
//   default: {
//      get: () => ({
//         data: {
//             results: [
//               {
//                 name: {
//                   first: "Donald",
//                   last: "Duck"
//                 },
//                 picture: {
//                   large: "https://randomuser.me/api/portraits/men/39.jpg"
//                 },
//                 login: {
//                   username: "AngelPriya"
//                 }
//               }
//             ]
//         }
//      })
//   }
// }));

describe("FollowersList", () => {

  it('should render follower item', async () => {
    render(<MockFollowersList />);
    // const followerDivElement = await screen.findByTestId('follower-item', {}, { timeout: 3000 })
    const followerDivElement = await screen.findByTestId('follower-item')
    expect(followerDivElement).toBeInTheDocument();
  });
})


//3.THIS WORKS
// jest.mock("axios");

// describe("FollowersList", () => {
//    test("should render follower item", async () => {
//       axios.get.mockResolvedValue({
//         data: {
//             results: [
//               {
//                 name: {
//                   first: "Donald",
//                   last: "Duck"
//                 },
//                 picture: {
//                   large: "https://randomuser.me/api/portraits/men/39.jpg"
//                 },
//                 login: {
//                   username: "AngelPriya"
//                 }
//               }
//             ]
//         }
//      });
//       render(<MockFollowersList />);
//       const followerDivElement = await screen.findByTestId('follower-item')
//       expect(followerDivElement).toBeInTheDocument();
//    });
// });