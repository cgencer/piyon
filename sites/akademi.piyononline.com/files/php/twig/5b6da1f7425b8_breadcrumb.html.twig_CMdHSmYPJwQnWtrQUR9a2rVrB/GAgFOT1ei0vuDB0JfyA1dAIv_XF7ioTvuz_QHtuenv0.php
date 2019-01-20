<?php

/* sites/all/themes/gavias_unix/templates/navigation/breadcrumb.html.twig */
class __TwigTemplate_f66e7ef39e9f0c4e45f771ac720b990ccb46dfc571f01aac9d5ac03ffdab1595 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 12, "set" => 16, "for" => 17);
        $filters = array("t" => 14, "length" => 25);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'set', 'for'),
                array('t', 'length'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 10
        echo "<div class=\"breadcrumb-links\">
  <div class=\"content-inner\">
    ";
        // line 12
        if (($context["breadcrumb"] ?? null)) {
            // line 13
            echo "      <nav class=\"breadcrumb ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["background"] ?? null), "html", null, true));
            echo "\" role=\"navigation\" aria-labelledby=\"system-breadcrumb\">
        <h2 id=\"system-breadcrumb\" class=\"visually-hidden\">";
            // line 14
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Breadcrumb")));
            echo "</h2>
        <ol>
        ";
            // line 16
            $context["i"] = 0;
            echo "  
        ";
            // line 17
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["breadcrumb"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 18
                echo "          ";
                $context["i"] = (($context["i"] ?? null) + 1);
                // line 19
                echo "          <li>
            ";
                // line 20
                if ($this->getAttribute($context["item"], "url", array())) {
                    // line 21
                    echo "              <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array()), "html", null, true));
                    echo "\">";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "text", array()), "html", null, true));
                    echo "</a>
            ";
                } else {
                    // line 23
                    echo "              ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "text", array()), "html", null, true));
                    echo "
            ";
                }
                // line 25
                echo "            ";
                if ((($context["i"] ?? null) < (twig_length_filter($this->env, ($context["breadcrumb"] ?? null)) - 1))) {
                    // line 26
                    echo "              <span class=\"\"> - </span>
            ";
                }
                // line 27
                echo "  
          </li>
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 30
            echo "        </ol>
      </nav>
    ";
        }
        // line 33
        echo "  </div> 
</div>  ";
    }

    public function getTemplateName()
    {
        return "sites/all/themes/gavias_unix/templates/navigation/breadcrumb.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  109 => 33,  104 => 30,  96 => 27,  92 => 26,  89 => 25,  83 => 23,  75 => 21,  73 => 20,  70 => 19,  67 => 18,  63 => 17,  59 => 16,  54 => 14,  49 => 13,  47 => 12,  43 => 10,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "sites/all/themes/gavias_unix/templates/navigation/breadcrumb.html.twig", "/home/piyon/v8/sites/all/themes/gavias_unix/templates/navigation/breadcrumb.html.twig");
    }
}
