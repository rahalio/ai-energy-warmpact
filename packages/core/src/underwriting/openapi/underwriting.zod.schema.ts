import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const underwriteBuildingConnection_Body = z
  .object({
    conditionProductId: z.string(),
    surveyPerformed: z.boolean().optional(),
    envelopeConditionNotes: z.string().optional(),
    historyMonthsAvailable: z.number().int().optional(),
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
const UnderwritingAssessment = z
  .object({
    id: z.string(),
    connectionId: z.string(),
    conditionProductId: z.string().optional(),
    decision: z.enum(['offer', 'decline', 'remediate_first']),
    declineReason: z
      .enum([
        'insufficient_substation_capacity',
        'envelope_condition_too_poor',
        'persistent_high_return_temperature',
        'no_remote_read_available',
        'unresolved_building_side_fault',
      ])
      .optional(),
    substationHealthScore: z.number().int().gte(1).lte(5),
    envelopeConditionGrade: z.enum(['A', 'B', 'C', 'D', 'E']),
    modelledAnnualHeatMwh: z.number().optional(),
    deliverabilityConfidence: z.number().optional(),
    requiredRemediationProposalId: z.string().optional(),
    assessedBy: z.string().optional(),
    assessedAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const DataEnvelopeUnderwritingAssessment = z
  .object({
    data: z
      .object({
        id: z.string(),
        connectionId: z.string(),
        conditionProductId: z.string().optional(),
        decision: z.enum(['offer', 'decline', 'remediate_first']),
        declineReason: z
          .enum([
            'insufficient_substation_capacity',
            'envelope_condition_too_poor',
            'persistent_high_return_temperature',
            'no_remote_read_available',
            'unresolved_building_side_fault',
          ])
          .optional(),
        substationHealthScore: z.number().int().gte(1).lte(5),
        envelopeConditionGrade: z.enum(['A', 'B', 'C', 'D', 'E']),
        modelledAnnualHeatMwh: z.number().optional(),
        deliverabilityConfidence: z.number().optional(),
        requiredRemediationProposalId: z.string().optional(),
        assessedBy: z.string().optional(),
        assessedAt: z.string().datetime({ offset: true }).optional(),
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
const UnderwritingRequest = z
  .object({
    conditionProductId: z.string(),
    surveyPerformed: z.boolean().optional(),
    envelopeConditionNotes: z.string().optional(),
    historyMonthsAvailable: z.number().int().optional(),
  })
  .passthrough();
const BuildingThermalModel = z
  .object({
    connectionId: z.string(),
    version: z.number().int(),
    heatLossCoefficientWPerK: z.number(),
    thermalTimeConstantHours: z.number().optional(),
    balanceTemperatureC: z.number().optional(),
    degreeDayBase: z.number().optional(),
    minimumViableSupplyTemperatureC: z.number().optional(),
    domesticHotWaterSharePercent: z.number().optional(),
    fitQuality: z.number().optional(),
    derivedFrom: z
      .array(
        z.enum([
          'substation_telemetry',
          'heat_meter_history',
          'weather_series',
          'physical_survey',
          'building_register',
        ])
      )
      .optional(),
  })
  .passthrough();
const DataEnvelopeBuildingThermalModel = z
  .object({
    data: z
      .object({
        connectionId: z.string(),
        version: z.number().int(),
        heatLossCoefficientWPerK: z.number(),
        thermalTimeConstantHours: z.number().optional(),
        balanceTemperatureC: z.number().optional(),
        degreeDayBase: z.number().optional(),
        minimumViableSupplyTemperatureC: z.number().optional(),
        domesticHotWaterSharePercent: z.number().optional(),
        fitQuality: z.number().optional(),
        derivedFrom: z
          .array(
            z.enum([
              'substation_telemetry',
              'heat_meter_history',
              'weather_series',
              'physical_survey',
              'building_register',
            ])
          )
          .optional(),
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
  underwriteBuildingConnection_Body,
  Problem,
  UnderwritingAssessment,
  ResponseMeta,
  DataEnvelopeUnderwritingAssessment,
  UnderwritingRequest,
  BuildingThermalModel,
  DataEnvelopeBuildingThermalModel,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/connections/:connectionId/thermal-model',
    alias: 'getBuildingThermalModel',
    requestFormat: 'json',
    parameters: [
      {
        name: 'connectionId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            connectionId: z.string(),
            version: z.number().int(),
            heatLossCoefficientWPerK: z.number(),
            thermalTimeConstantHours: z.number().optional(),
            balanceTemperatureC: z.number().optional(),
            degreeDayBase: z.number().optional(),
            minimumViableSupplyTemperatureC: z.number().optional(),
            domesticHotWaterSharePercent: z.number().optional(),
            fitQuality: z.number().optional(),
            derivedFrom: z
              .array(
                z.enum([
                  'substation_telemetry',
                  'heat_meter_history',
                  'weather_series',
                  'physical_survey',
                  'building_register',
                ])
              )
              .optional(),
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
    path: '/v1/connections/:connectionId/underwriting',
    alias: 'underwriteBuildingConnection',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: underwriteBuildingConnection_Body,
      },
      {
        name: 'connectionId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            connectionId: z.string(),
            conditionProductId: z.string().optional(),
            decision: z.enum(['offer', 'decline', 'remediate_first']),
            declineReason: z
              .enum([
                'insufficient_substation_capacity',
                'envelope_condition_too_poor',
                'persistent_high_return_temperature',
                'no_remote_read_available',
                'unresolved_building_side_fault',
              ])
              .optional(),
            substationHealthScore: z.number().int().gte(1).lte(5),
            envelopeConditionGrade: z.enum(['A', 'B', 'C', 'D', 'E']),
            modelledAnnualHeatMwh: z.number().optional(),
            deliverabilityConfidence: z.number().optional(),
            requiredRemediationProposalId: z.string().optional(),
            assessedBy: z.string().optional(),
            assessedAt: z.string().datetime({ offset: true }).optional(),
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
        status: 409,
        description: `Insufficient substation history to build a thermal model`,
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
    path: '/v1/connections/:connectionId/underwriting',
    alias: 'getUnderwritingAssessment',
    requestFormat: 'json',
    parameters: [
      {
        name: 'connectionId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            connectionId: z.string(),
            conditionProductId: z.string().optional(),
            decision: z.enum(['offer', 'decline', 'remediate_first']),
            declineReason: z
              .enum([
                'insufficient_substation_capacity',
                'envelope_condition_too_poor',
                'persistent_high_return_temperature',
                'no_remote_read_available',
                'unresolved_building_side_fault',
              ])
              .optional(),
            substationHealthScore: z.number().int().gte(1).lte(5),
            envelopeConditionGrade: z.enum(['A', 'B', 'C', 'D', 'E']),
            modelledAnnualHeatMwh: z.number().optional(),
            deliverabilityConfidence: z.number().optional(),
            requiredRemediationProposalId: z.string().optional(),
            assessedBy: z.string().optional(),
            assessedAt: z.string().datetime({ offset: true }).optional(),
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
        status: 404,
        description: `Resource not found`,
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
