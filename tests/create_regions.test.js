const { createRegion } = require('../src/controller');
const RegionModel = require('../src/models/regions');

describe('createRegion', () => {
  it('should create a new region and return the region ID', async () => {
    const req = {
      body: {
        regionName: 'North-West',
        population: { total: 48942307 },
        size: { value: 216000, unit: 'square Km' },
        metadata: { coordinates: { latitude: 12.2189, longitude: 5.3107 } },
      },
    };

    const newRegion = {
      _id: 'regionId',
      ...req.body,
    };

    jest.spyOn(RegionModel, 'create').mockResolvedValue(newRegion);

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createRegion(req, res);

    expect(RegionModel.create).toHaveBeenCalledWith(
      expect.objectContaining(req.body)
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      msg: 'Success',
      regionId: newRegion._id,
    });
  });
});
