import { A, f } from './array';

// AssemblyScript-compatible Position type
type Position = [f32, f32];

export class Vector extends A<Position> {
  private _isComplex: boolean = false;

  constructor(data: A<Position> | Position[], isComplex: boolean = false) {
    super(data instanceof A ? data : data);
    this._isComplex = isComplex;
  }

  // Your vector operations optimized for WASM
  plus(other: Vector): Vector {
    const result = new A<Position>();
    for (let i = 0; i < this.length; i++) {
      const a = this[i];
      const b = other[i];
      result.push([a[0] + b[0], a[1] + b[1]]);
    }
    return new Vector(result, this._isComplex || other._isComplex);
  }

  minus(other: Vector): Vector {
    const result = new A<Position>();
    for (let i = 0; i < this.length; i++) {
      const a = this[i];
      const b = other[i];
      result.push([a[0] - b[0], a[1] - b[1]]);
    }
    return new Vector(result, this._isComplex || other._isComplex);
  }

  times(scalar: f32): Vector {
    return new Vector(
      this.select((p: Position): Position => [p[0] * scalar, p[1] * scalar]),
      this._isComplex
    );
  }

  // Your specialized methods
  norm(min: f32 = 0, max: f32 = 1): Vector {
    let minVal = f32.MAX_VALUE;
    let maxVal = f32.MIN_VALUE;
    
    // Find min/max
    for (let i = 0; i < this.length; i++) {
      const val = this[i][0];
      if (val < minVal) minVal = val;
      if (val > maxVal) maxVal = val;
    }
    
    const range = maxVal - minVal;
    const targetRange = max - min;
    
    return new Vector(
      this.select((p: Position): Position => [
        min + ((p[0] - minVal) / range) * targetRange,
        min + ((p[1] - minVal) / range) * targetRange
      ]),
      this._isComplex
    );
  }

  // Complex number operations
  magnitude(): Vector {
    if (!this._isComplex) return this;
    return new Vector(
      this.select((p: Position): Position => {
        const mag = Math.sqrt(p[0] * p[0] + p[1] * p[1]) as f32;
        return [mag, 0];
      }),
      false
    );
  }

  // Static generators
  static linspace(min: f32, max: f32, count: i32): Vector {
    const step = (max - min) / (count - 1);
    const result = new A<Position>();
    for (let i = 0; i < count; i++) {
      result.push([min + step * i, 0]);
    }
    return new Vector(result);
  }

  static zeros(count: i32): Vector {
    const result = new A<Position>();
    for (let i = 0; i < count; i++) {
      result.push([0, 0]);
    }
    return new Vector(result);
  }

  // Convert to flat array for efficient WASM operations
  toFlat(): Float32Array {
    const flat = new Float32Array(this.length * 2);
    for (let i = 0; i < this.length; i++) {
      flat[i * 2] = this[i][0];
      flat[i * 2 + 1] = this[i][1];
    }
    return flat;
  }

  static fromFlat(flat: Float32Array): Vector {
    const result = new A<Position>();
    for (let i = 0; i < flat.length; i += 2) {
      result.push([flat[i], flat[i + 1]]);
    }
    return new Vector(result);
  }
}

// Helper function
export function v(data: Position[] | A<Position> | null = null): Vector {
  if (!data) return new Vector(new A<Position>());
  return new Vector(data instanceof A ? data : data);
}