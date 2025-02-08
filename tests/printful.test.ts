import {
  ApprovalSheetsV2Service,
  CatalogV2Service,
  CountriesV2Service,
  FilesV2Service,
  MockupGeneratorV2Service,
  OAuthScopesV2Service,
  OrdersV2Service,
  PrintfulClient,
  ShippingRatesV2Service,
  StoresV2Service,
  WarehouseProductsV2Service,
  WebhookV2Service,
} from '../src/index';

describe('PrintfulClient', () => {
  let printful: PrintfulClient;
  const accessToken = 'mockAccessToken';
  const config = { TOKEN: accessToken };

  beforeEach(() => {
    printful = new PrintfulClient(config);
  });

  it('should initialize with provided config', () => {
    expect(printful.request).toBeDefined();
    expect(printful.approvalSheetsV2).toBeInstanceOf(ApprovalSheetsV2Service);
    expect(printful.catalogV2).toBeInstanceOf(CatalogV2Service);
    expect(printful.countriesV2).toBeInstanceOf(CountriesV2Service);
    expect(printful.filesV2).toBeInstanceOf(FilesV2Service);
    expect(printful.mockupGeneratorV2).toBeInstanceOf(MockupGeneratorV2Service);
    expect(printful.oAuthScopesV2).toBeInstanceOf(OAuthScopesV2Service);
    expect(printful.ordersV2).toBeInstanceOf(OrdersV2Service);
    expect(printful.shippingRatesV2).toBeInstanceOf(ShippingRatesV2Service);
    expect(printful.storesV2).toBeInstanceOf(StoresV2Service);
    expect(printful.warehouseProductsV2).toBeInstanceOf(WarehouseProductsV2Service);
    expect(printful.webhookV2).toBeInstanceOf(WebhookV2Service);
  });

  it('should handle missing accessToken gracefully', () => {
    // @ts-expect-error - Testing for missing accessToken
    const printfulMissingToken = () => new PrintfulClient({ foo: 'bar' });
    expect(printfulMissingToken).not.toThrowError('accessToken is required');
  });
});
