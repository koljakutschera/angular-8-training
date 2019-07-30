import { TestBed, async, inject } from "@angular/core/testing";

import { CanNavigateToAdminGuard } from "./can-navigate-to-admin.guard";

describe("CanNavigateToAdminGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanNavigateToAdminGuard]
    });
  });

  it("should ...", inject(
    [CanNavigateToAdminGuard],
    (guard: CanNavigateToAdminGuard) => {
      expect(guard).toBeTruthy();
    }
  ));
});
