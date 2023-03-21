export class SearchDto {
  source: string;
  destination: string;
  distance?: number;
}

export class CreateSearchRequestDto {
  source: string;
  destination: string;
}

export class CreateSearchResponseDto {
  distance?: number;
}
