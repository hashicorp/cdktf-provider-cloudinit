// https://www.terraform.io/docs/providers/cloudinit/d/config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudinitConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config.html#base64_encode DataCloudinitConfig#base64_encode}
  */
  readonly base64Encode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config.html#boundary DataCloudinitConfig#boundary}
  */
  readonly boundary?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config.html#gzip DataCloudinitConfig#gzip}
  */
  readonly gzip?: boolean | cdktf.IResolvable;
  /**
  * part block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config.html#part DataCloudinitConfig#part}
  */
  readonly part: DataCloudinitConfigPart[];
}
export interface DataCloudinitConfigPart {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config.html#content DataCloudinitConfig#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config.html#content_type DataCloudinitConfig#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config.html#filename DataCloudinitConfig#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudinit/d/config.html#merge_type DataCloudinitConfig#merge_type}
  */
  readonly mergeType?: string;
}

export function dataCloudinitConfigPartToTerraform(struct?: DataCloudinitConfigPart): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    filename: cdktf.stringToTerraform(struct!.filename),
    merge_type: cdktf.stringToTerraform(struct!.mergeType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudinit/d/config.html cloudinit_config}
*/
export class DataCloudinitConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "cloudinit_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudinit/d/config.html cloudinit_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudinitConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudinitConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudinit_config',
      terraformGeneratorMetadata: {
        providerName: 'cloudinit'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._base64Encode = config.base64Encode;
    this._boundary = config.boundary;
    this._gzip = config.gzip;
    this._part = config.part;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_encode - computed: false, optional: true, required: false
  private _base64Encode?: boolean | cdktf.IResolvable; 
  public get base64Encode() {
    return this.getBooleanAttribute('base64_encode') as any;
  }
  public set base64Encode(value: boolean | cdktf.IResolvable) {
    this._base64Encode = value;
  }
  public resetBase64Encode() {
    this._base64Encode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodeInput() {
    return this._base64Encode;
  }

  // boundary - computed: false, optional: true, required: false
  private _boundary?: string; 
  public get boundary() {
    return this.getStringAttribute('boundary');
  }
  public set boundary(value: string) {
    this._boundary = value;
  }
  public resetBoundary() {
    this._boundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundaryInput() {
    return this._boundary;
  }

  // gzip - computed: false, optional: true, required: false
  private _gzip?: boolean | cdktf.IResolvable; 
  public get gzip() {
    return this.getBooleanAttribute('gzip') as any;
  }
  public set gzip(value: boolean | cdktf.IResolvable) {
    this._gzip = value;
  }
  public resetGzip() {
    this._gzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipInput() {
    return this._gzip;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // part - computed: false, optional: false, required: true
  private _part?: DataCloudinitConfigPart[]; 
  public get part() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('part') as any;
  }
  public set part(value: DataCloudinitConfigPart[]) {
    this._part = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partInput() {
    return this._part;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_encode: cdktf.booleanToTerraform(this._base64Encode),
      boundary: cdktf.stringToTerraform(this._boundary),
      gzip: cdktf.booleanToTerraform(this._gzip),
      part: cdktf.listMapper(dataCloudinitConfigPartToTerraform)(this._part),
    };
  }
}
