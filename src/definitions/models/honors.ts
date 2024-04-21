interface Honor {
  id: number;
  name: string;
  description: string;
  type: number;
}

interface HonorCollection {
  [id: string]: Honor;
}

interface HonorsObject {
  honors: HonorCollection;
}
