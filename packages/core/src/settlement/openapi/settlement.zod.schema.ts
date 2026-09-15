import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const ingestConditionMeasurement_Body = z
  .object({
    connectionId: z.string(),
    measuredAt: z.string().datetime({ offset: true }),
    indoorTemperatureC: z.number().optional(),
    measurementPoint: z
      .enum([
        'reference_dwelling',
        'corridor_sensor',
        'building_automation',
        'substation_proxy',
      ])
      .optional(),
    hotWaterAvailable: z.boolean().optional(),
    hotWaterTemperatureC: z.number().optional(),
    withinGuarantee: z.boolean().optional(),
  })
  .passthrough();
const issueFlatRateInvoice_Body = z
  .object({ guaranteeId: z.string(), period: z.string() })
  .passthrough();
const ConditionMeasurement = z
  .object({
    connectionId: z.string(),
    measuredAt: z.string().datetime({ offset: true }),
    indoorTemperatureC: z.number().optional(),
    measurementPoint: z
      .enum([
        'reference_dwelling',
        'corridor_sensor',
        'building_automation',
        'substation_proxy',
      ])
      .optional(),
    hotWaterAvailable: z.boolean().optional(),
    hotWaterTemperatureC: z.number().optional(),
    withinGuarantee: z.boolean().optional(),
  })
  .passthrough();
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const DataEnvelopeConditionMeasurement = z
  .object({
    data: z
      .object({
        connectionId: z.string(),
        measuredAt: z.string().datetime({ offset: true }),
        indoorTemperatureC: z.number().optional(),
        measurementPoint: z
          .enum([
            'reference_dwelling',
            'corridor_sensor',
            'building_automation',
            'substation_proxy',
          ])
          .optional(),
        hotWaterAvailable: z.boolean().optional(),
        hotWaterTemperatureC: z.number().optional(),
        withinGuarantee: z.boolean().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough(),
  })
  .passthrough();
const Money = z
  .object({ amount: z.number(), currency: z.string() })
  .passthrough();
const ServiceCredit = z
  .object({
    id: z.string().optional(),
    amount: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough(),
    basis: z.enum([
      'pro_rata_duration',
      'fixed_per_breach',
      'escalating_repeat_breach',
    ]),
    appliedAutomatically: z.boolean().optional(),
    invoiceId: z.string().optional(),
  })
  .passthrough();
const GuaranteeBreach = z
  .object({
    id: z.string(),
    guaranteeId: z.string(),
    connectionId: z.string().optional(),
    breachType: z.enum([
      'indoor_temperature_below_band',
      'indoor_temperature_above_band',
      'hot_water_unavailable',
      'response_time_exceeded',
    ]),
    detectedBy: z.enum(['measurement', 'customer_report']),
    period: z.string(),
    durationHours: z.number().optional(),
    excluded: z.boolean().optional(),
    exclusionReference: z.string().optional(),
    serviceCredit: z
      .object({
        id: z.string().optional(),
        amount: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough(),
        basis: z.enum([
          'pro_rata_duration',
          'fixed_per_breach',
          'escalating_repeat_breach',
        ]),
        appliedAutomatically: z.boolean().optional(),
        invoiceId: z.string().optional(),
      })
      .passthrough()
      .optional(),
  })
  .passthrough();
const ListEnvelopeGuaranteeBreach = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              guaranteeId: z.string(),
              connectionId: z.string().optional(),
              breachType: z.enum([
                'indoor_temperature_below_band',
                'indoor_temperature_above_band',
                'hot_water_unavailable',
                'response_time_exceeded',
              ]),
              detectedBy: z.enum(['measurement', 'customer_report']),
              period: z.string(),
              durationHours: z.number().optional(),
              excluded: z.boolean().optional(),
              exclusionReference: z.string().optional(),
              serviceCredit: z
                .object({
                  id: z.string().optional(),
                  amount: z
                    .object({ amount: z.number(), currency: z.string() })
                    .passthrough(),
                  basis: z.enum([
                    'pro_rata_duration',
                    'fixed_per_breach',
                    'escalating_repeat_breach',
                  ]),
                  appliedAutomatically: z.boolean().optional(),
                  invoiceId: z.string().optional(),
                })
                .passthrough()
                .optional(),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough(),
  })
  .passthrough();
const FlatRateInvoice = z
  .object({
    id: z.string(),
    guaranteeId: z.string(),
    connectionId: z.string().optional(),
    period: z.string(),
    grossAmount: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough(),
    serviceCreditTotal: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough()
      .optional(),
    netAmount: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough(),
    deliveredHeatMwh: z.number().optional(),
    carbonIntensityKgPerMwh: z.number().optional(),
    issuedAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const ListEnvelopeFlatRateInvoice = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              guaranteeId: z.string(),
              connectionId: z.string().optional(),
              period: z.string(),
              grossAmount: z
                .object({ amount: z.number(), currency: z.string() })
                .passthrough(),
              serviceCreditTotal: z
                .object({ amount: z.number(), currency: z.string() })
                .passthrough()
                .optional(),
              netAmount: z
                .object({ amount: z.number(), currency: z.string() })
                .passthrough(),
              deliveredHeatMwh: z.number().optional(),
              carbonIntensityKgPerMwh: z.number().optional(),
              issuedAt: z.string().datetime({ offset: true }).optional(),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough(),
  })
  .passthrough();
const DataEnvelopeFlatRateInvoice = z
  .object({
    data: z
      .object({
        id: z.string(),
        guaranteeId: z.string(),
        connectionId: z.string().optional(),
        period: z.string(),
        grossAmount: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough(),
        serviceCreditTotal: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough()
          .optional(),
        netAmount: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough(),
        deliveredHeatMwh: z.number().optional(),
        carbonIntensityKgPerMwh: z.number().optional(),
        issuedAt: z.string().datetime({ offset: true }).optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough(),
  })
  .passthrough();
const MarginReport = z
  .object({
    period: z.string(),
    connectionsUnderConditionContract: z.number().int().optional(),
    grossMarginPerConnection: z
      .object({ amount: z.number(), currency: z.string() })
      .passthrough()
      .optional(),
    marginToVolumeCorrelation: z.number().optional(),
    serviceCreditShareOfConditionRevenuePercent: z.number().optional(),
    advisoryRevenueSharePercent: z.number().optional(),
    distributionHeatLossPercent: z.number().optional(),
    medianNetworkReturnTemperatureC: z.number().optional(),
    churnToAlternativeHeatingCount: z.number().int().optional(),
  })
  .passthrough();
const DataEnvelopeMarginReport = z
  .object({
    data: z
      .object({
        period: z.string(),
        connectionsUnderConditionContract: z.number().int().optional(),
        grossMarginPerConnection: z
          .object({ amount: z.number(), currency: z.string() })
          .passthrough()
          .optional(),
        marginToVolumeCorrelation: z.number().optional(),
        serviceCreditShareOfConditionRevenuePercent: z.number().optional(),
        advisoryRevenueSharePercent: z.number().optional(),
        distributionHeatLossPercent: z.number().optional(),
        medianNetworkReturnTemperatureC: z.number().optional(),
        churnToAlternativeHeatingCount: z.number().int().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough(),
  })
  .passthrough();

export const schemas: any = {
  ingestConditionMeasurement_Body,
  issueFlatRateInvoice_Body,
  ConditionMeasurement,
  Problem,
  ResponseMeta,
  DataEnvelopeConditionMeasurement,
  Money,
  ServiceCredit,
  GuaranteeBreach,
  ListEnvelopeGuaranteeBreach,
  FlatRateInvoice,
  ListEnvelopeFlatRateInvoice,
  DataEnvelopeFlatRateInvoice,
  MarginReport,
  DataEnvelopeMarginReport,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/settlement/breaches',
    alias: 'listGuaranteeBreaches',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(200).optional().default(50),
      },
      {
        name: 'period',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'detectedBy',
        type: 'Query',
        schema: z.enum(['measurement', 'customer_report']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string(),
                  guaranteeId: z.string(),
                  connectionId: z.string().optional(),
                  breachType: z.enum([
                    'indoor_temperature_below_band',
                    'indoor_temperature_above_band',
                    'hot_water_unavailable',
                    'response_time_exceeded',
                  ]),
                  detectedBy: z.enum(['measurement', 'customer_report']),
                  period: z.string(),
                  durationHours: z.number().optional(),
                  excluded: z.boolean().optional(),
                  exclusionReference: z.string().optional(),
                  serviceCredit: z
                    .object({
                      id: z.string().optional(),
                      amount: z
                        .object({ amount: z.number(), currency: z.string() })
                        .passthrough(),
                      basis: z.enum([
                        'pro_rata_duration',
                        'fixed_per_breach',
                        'escalating_repeat_breach',
                      ]),
                      appliedAutomatically: z.boolean().optional(),
                      invoiceId: z.string().optional(),
                    })
                    .passthrough()
                    .optional(),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/settlement/condition-measurements',
    alias: 'ingestConditionMeasurement',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ingestConditionMeasurement_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            connectionId: z.string(),
            measuredAt: z.string().datetime({ offset: true }),
            indoorTemperatureC: z.number().optional(),
            measurementPoint: z
              .enum([
                'reference_dwelling',
                'corridor_sensor',
                'building_automation',
                'substation_proxy',
              ])
              .optional(),
            hotWaterAvailable: z.boolean().optional(),
            hotWaterTemperatureC: z.number().optional(),
            withinGuarantee: z.boolean().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/settlement/invoices',
    alias: 'listFlatRateInvoices',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(200).optional().default(50),
      },
      {
        name: 'period',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string(),
                  guaranteeId: z.string(),
                  connectionId: z.string().optional(),
                  period: z.string(),
                  grossAmount: z
                    .object({ amount: z.number(), currency: z.string() })
                    .passthrough(),
                  serviceCreditTotal: z
                    .object({ amount: z.number(), currency: z.string() })
                    .passthrough()
                    .optional(),
                  netAmount: z
                    .object({ amount: z.number(), currency: z.string() })
                    .passthrough(),
                  deliveredHeatMwh: z.number().optional(),
                  carbonIntensityKgPerMwh: z.number().optional(),
                  issuedAt: z.string().datetime({ offset: true }).optional(),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/settlement/invoices',
    alias: 'issueFlatRateInvoice',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: issueFlatRateInvoice_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            guaranteeId: z.string(),
            connectionId: z.string().optional(),
            period: z.string(),
            grossAmount: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough(),
            serviceCreditTotal: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough()
              .optional(),
            netAmount: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough(),
            deliveredHeatMwh: z.number().optional(),
            carbonIntensityKgPerMwh: z.number().optional(),
            issuedAt: z.string().datetime({ offset: true }).optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/settlement/margin-report',
    alias: 'getMarginPerConnectionReport',
    requestFormat: 'json',
    parameters: [
      {
        name: 'period',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            period: z.string(),
            connectionsUnderConditionContract: z.number().int().optional(),
            grossMarginPerConnection: z
              .object({ amount: z.number(), currency: z.string() })
              .passthrough()
              .optional(),
            marginToVolumeCorrelation: z.number().optional(),
            serviceCreditShareOfConditionRevenuePercent: z.number().optional(),
            advisoryRevenueSharePercent: z.number().optional(),
            distributionHeatLossPercent: z.number().optional(),
            medianNetworkReturnTemperatureC: z.number().optional(),
            churnToAlternativeHeatingCount: z.number().int().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
