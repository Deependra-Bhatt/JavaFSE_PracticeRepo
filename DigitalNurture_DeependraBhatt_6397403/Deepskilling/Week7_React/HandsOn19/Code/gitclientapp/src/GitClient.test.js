import axios from "axios";
import GitClient from "./GitClient";

jest.mock("axios");

describe("Git Client Tests", () => {
  test("should return repository names for techiesyed", async () => {
    const mockData = [{ name: "Repo1" }, { name: "Repo2" }, { name: "Repo3" }];
    axios.get.mockResolvedValue({ data: mockData });

    const response = await GitClient.getRepositories("techiesyed");

    expect(response.data.map((r) => r.name)).toEqual([
      "Repo1",
      "Repo2",
      "Repo3",
    ]);
  });
});
