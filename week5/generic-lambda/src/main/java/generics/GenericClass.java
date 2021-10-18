package generics;

public class GenericClass<G> {

	G g;

	public void add(G g){
		this.g=g;
	}

	public G get(){
		return g;
	}


}
